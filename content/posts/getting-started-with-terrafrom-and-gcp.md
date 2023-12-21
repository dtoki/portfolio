---
title: Setting up Terraform to work with a GCP project
date: 2023-12-21
tags: ['GCP', 'Terrafrom', 'IAC', 'Guide']
canonical_url: false
series: true
published: true
description: "A step-by-step guide to set up Terraform to work with a GCP project using Cloud Storage as a backend"
---

this is my updated process to a [previous guide i've used: written by Edgar Ochoa](https://gcloud.devoteam.com/blog/a-step-by-step-guide-to-set-up-a-gcp-project-to-start-using-terraform/)

## What will you learn?

in this guide we will go through the steps to set up Terraform to work with a GCP Project using GCP Cloud Storage as your backend backend.

## What do you need before starting?

to follow this guide you need to:
- be familiar with the GCP Console / `gcloud` cli: 
- have some basic understanding of GCP services such as Identity and Access Management (IAM) and Cloud Storage.
- have installed `terraform`

> 💡 tip: you'd need to enable Cloud Storage and an IAM API's. through the console or or using the cli

## Let’s get started

### 1. Set up your gcloud Configuration

Set up your `gcloud` configuration to the project that you will be working with.

`gcloud config set project PROJECT_ID`

next step is to set your own user credentials for Terraform in order to access the APIs:

`gcloud auth application-default login`

### 2. We'll create a service account for our project

recommend using a naming convention: 

```
sa-{SHORT_PROJECT_NAME}-tf-{ENVIRONMENT}.
```

> 💡 tip: the short name should be something related to the project name you are using.

**Example:**

The name of my service account is: sa-demo-tf-sbx

- Demo: my project is called `demo-playground`
- Sbx: the environment I’m using is called `sandbox`

```bash
gcloud iam service-accounts create sa-demo-tf-sbx \
--description="Terraform Service account Demo Sandbox Environment" \
--display-name="Terraform Service Account"
```

### 3. Provide your freshly created service account with the necessary roles and permissions

We will now provide the service account with the necessary roles and permissions. We will be granting the project Editor permission for a full list of possible roles you that can find [here](https://cloud.google.com/iam/docs/understanding-roles).

```bash
gcloud projects add-iam-policy-binding PROJECT_ID \
--member="serviceAccount:sa-demo-tf-sbx@PROJECT_ID.iam.gserviceaccount.com" \
--role="roles/editor"
```

We will be impersonating this service account to make all our changes. In order to do this, we need to grant ourselves the necessary permissions. You can do it like this:

**3.1.** First: get the policies for the service account and save it in policy.json

```bash
gcloud iam service-accounts get-iam-policy sa-demo-tf-sbx@PROJECT_ID.iam.gserviceaccount.com \
–-format=json > policy.json
```

**3.2.** Modify the policy.json to add yourself as member to the role 

```
roles/iam.serviceAccountTokenCreator
``` 
Remember to append the rest of policies that already exist:

```json
{
	"etag": "ACAB",
    “bindings”: [
        {
            “members”: [“user:user_name@domain.com”],
            “role”: “roles/iam.serviceAccountTokenCreator”
        }
	]
}
```

**3.3.** Update the policies with the policy.json file

```bash
gcloud iam service-accounts set-iam-policy sa-demo-tf-sbx@PROJECT_ID.gserviceaccount.com \
policy.json
```

### 4. Create a bucket that will hold your Terraform State

Now choose the name of the bucket. You can use this naming convention: 

*{short_project_name}-{Environment}-tf-state*

Example: in this case it will be *demo–sbx–tf-state*

This bucket will help you to keep the Terraform state in a location that is shared across all developers. It is a good practice to keep the states of Terraform with versioning.

> ⚠️ you'd need to make sure that you have enabled GCP storage api; or else the `gsutil` command bellow will fail, you can enable it though the console or running the command `gcloud services enable storage.googleapis.com`

```bash
gsutil mb gs://demo-sbx-tf-state
gsutil versioning set on gs://demo-sbx-tf-state
```

### 5. Write the Terraform

Now, let’s write the Terraform for this project. In order to do this we will need:

- a terraform main.tf file
- a .tfvars file
- a backend configuration file
- a terraform variables file

if you're unsure how to structure the Terraform code? you can use this as a starting point.

```bash
demo-infra-tf
│ main.tf
│ gcp-demo-sbx.tfvars
│ gcp-demo-sbx.backend
│ variables.tf
│ version.tf
└───module1
│ │ main.tf
│ │ outputs.tf
│ │ varialbes.tf
└───module2
│ │ main.tf
│ │ outputs.tf
│ │ varialbes.tf
…
```

> we will focus on the `main.tf`, `gcp-demo-sbx.tfvars`, `demo-sbx.backend` and `variables.tf`.

**5.1.**: main.tf

This is the main of our Terraform code. We will be using the [Google Provider](https://registry.terraform.io/providers/hashicorp/google/3.64.0/docs/guides/getting_started). Use the following code as starting point:

```hcl
provider “google” {
	project = var.project_id
	region = var.region
	zone = var.zone
	impersonate_service_account = var.tf_service_account
}
...

```

**5.2.**: gcp-demo-sbx.tfvars

Fill this with the variables that can be used for each environment.

```
project_id = “demo-sbx-tf-state”
region = “us-west1”
zone = “us-west1-a”
tf_service_account = “sa-demo-tf-sbx@PROJECT_ID.iam.gserviceaccount.com”
```

**5.3.**: gcp-demo-sbx.backend

```text
# This file contains the definition of the backend, the bucket name, the prefix to use to save the state and the service account to impersonate.
bucket = “demo-sbx-tf-state”
prefix = “static.tfstate.d”
impersonate_service_account = “sa-demo-tf-sbx@PROJECT_ID.iam.gserviceaccount.com”
```

**5.4.:** version.tf

This will enable you to keep track of exactly which version of Terraform you are using and each provider that is required.

``` hcl
terraform {
  required_version = "~>1.5.0"
  backend "gcs" {}
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 4.78.0"
    }
  }
}
```

### 6. Initialise the Terraform code

The next step is to initialise the Terraform code using the following command:

`terraform init -backend-config=gcp-demo-sbx.backend`

### 7. Create a workspace

Now you can create a workspace. [Workspaces](https://www.terraform.io/language/state/workspaces) should be created for each environment.

`terraform workspace new gcp-demo-sbx`

### 8. Plan and apply

Now you can plan and apply the solution.
```
terraform plan –out tf.plan –var-file=gcp-demo-sbx.tfvars && tf apply tf.plan
```

## Improvements to this process
- it is possible to leverage the IAM module from the Google Cloud Provider to manage all your permissions.
- it's also possible to enable and manage the required GCP API's using terraform instead of the `gloud` command.

<!-- - Migrate your current setup using [bulk export](https://cloud.google.com/sdk/gcloud/reference/beta/resource-config/bulk-export) to Terraform -->

## Conclusion

Congratulations! You can now set up Terraform and set up its backend in the GCP Cloud Storage. 🎉

