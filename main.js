https://teachablemachine.withgoogle.com/models/k_nOySFkU/

function startclassification()
{

navigator.mediaDevices.getUserMedia({
audio:true    
});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/k_nOySFkU/model.json',modelloaded);
}
function modelloaded()
{
    classifier.classify(gotresults)
}