var config = {
    apiKey: "AIzaSyBjZv_lDvhv1khZ7VOrdcGoeRWHcIEGMWs",
    authDomain: "dolapo-websiteapi.firebaseapp.com",
    databaseURL: "https://dolapo-websiteapi.firebaseio.com",
    projectId: "dolapo-websiteapi",
};
firebase.initializeApp(config);

enableUiElements();

//Api call to get the projects 
function getProjects(callback){
    firebase.database().ref('/project/').once('value').then(function(snapshot) {
      let message = snapshot.val();
      console.log(message);
      //console.log(message.length);
      return callback(message);
    });

}

//Api call to get the work experiences
function getExperience(callback){
   firebase.database().ref('/experience/').once('value').then(function(snapshot) {
      let message = snapshot.val();
      console.log(message);
      return callback(message);
    });
}

//Visually enable ui elements that deped on having the gapi client loaded 
function enableUiElements(){
  $("#projectWindow").addClass("cardLoaded");
  $("#experienceButton").addClass("cardLoaded");
}