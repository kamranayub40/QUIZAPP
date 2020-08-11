// var get=document.getElementsByClassName('firstpage').innerHTML=firstpage;
var  count=0,score=0,paper,paper_status,choice,choices,opt1,opt2,opt3,opt4,right=0,quistion ,paper1,paper2,paper3
 
var quistions=[
    {
        quistion:"what is your name",
       
            a: "kam",
            b: "kamran ayoub",
            c:"kami",
            d:"kamran",
            answer:"B"
    },
    {
        quistion:"what is your age",
       
            a: "20",
            b: "22",
            c:"23",
            d:"24",
            answer:"A"
        
       
    },
    {
        quistion:"which platform you are learn best techonology",
       
            a: "Sylani(SMIT)",
            b: "University",
            c:"youtube",
            d:"Self",
            answer:"A"
        
       
    },
    

    
    
];
function getId(id){
    return document.getElementById(id);

}
function getQuistion(){
    paper=getId("paper");
    paper1=getId("score")
    paper2=getId("right")
    paper3=getId("question")
    if(count>=quistions.length)
    {
        paper.innerHTML="<h2>YOU got "+right+"of "+quistions.length+" quistions right</h2>";
        getId("paper_status").innerHTML="Your Teste has been completed"
        paper1.innerHTML="<h2>Score:"+score+"</h2>";
        paper2.innerHTML="<h2> Right:"+right+"</h2>";
        paper3.innerHTML="<h2> Total Question:"+quistions.length+"</h2>";

        
        score=0;
        count=0;
        right=0;
        return false;

    }
    getId("paper_status").innerHTML="Question"+(count+1)+ " of    " +quistions.length;
   
    quistion=quistions[count].quistion;
    opt1=quistions[count].a;
    opt2=quistions[count].b;
    opt3=quistions[count].c;
    opt4=quistions[count].d;
    paper.innerHTML ="<h3> "+quistion+"</h3>";
    paper.innerHTML +="<label><input type='radio' name='choices' value='A'>"+opt1+"</label><br>";
    paper.innerHTML +="<label><input type='radio' name='choices' value='B'>"+opt2+"</label><br>";
    paper.innerHTML +="<label><input type='radio' name='choices' value='C'>"+opt3+"</label><br>";
    paper.innerHTML +="<label><input type='radio' name='choices' value='D'>"+opt4+"</label><br><br>";


    paper.innerHTML +="<button onclick='checkAnswer()'>Submit</button>";


}function checkAnswer(){
    choices=document.getElementsByName("choices")
    for(var i=0;i<choices.length;i++){
        if(choices[i].checked){
            choice=choices[i].value;
        }

    }
    if(choice==quistions[count].answer){
        
        right++;
        score+=5;
        
    }
        count++;
        getQuistion();

    
}
window.addEventListener("load",getQuistion);
