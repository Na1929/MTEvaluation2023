PennController.ResetPrefix();
DebugOff();
//code for participants recruited from crowdsourcing
/*
var str = 'abcdefghijklmnopqrstuvwxyz' + '0123456789'+ '0123456789'+ '0123456789';
var code = '';
for(var i = 0; i < 10; i++) {
    code += str[Math.floor(Math.random() * str.length)];
}

Header().log("code", code); // Will add the code to every result line

*/
//Sequence
Sequence("intro", "instruction1", "instruction2", "counter", "target", "send", "completion_screen");
//Introduction
newTrial("intro",
newHtml("message", "intro.html") .center()
        .log()
        .print()
        ,
newButton("Continue", "次へ") .center()
.print()
.wait());

// 課題の教示のページ  Instruction 

newTrial("instruction1",
newHtml("message", "instruction1.html") .center()
        .log()
        .print()
        ,
newButton("Continue", "次へ") .center()
.print()
.wait());

newTrial("instruction2",
newHtml("message", "instruction2.html") .center()
        .log()
        .print()
        ,
newButton("Continue", "次へ") .center()
.print()
.wait());

SetCounter("counter", "inc", 1); //Counter

//Template
Template("target_t2.csv", row => 
    newTrial("target",
        newController("AcceptabilityJudgment",
            {s: row.sentence,
            as: [row.MT1_gt, row.MT2_dl],  
            presentAsScale: false,
            randomOrder: true,
            instructions: "より適切な翻訳だと感じるほうの数字キーまたは選択肢をクリックしてください",
            //leftComment: "不自然", rightComment: "自然"
            }
        )
    .center()
    .print()
    .log()
    .wait()
    )
//.log("item",row.item)
//.log("cond",row.cond) 
//.log("group",row.group)
);

// Send results manually
SendResults("send");

// Completion screen with a message
newTrial("completion_screen",
    newText("お疲れ様でした!ご協力ありがとうございました。")
        .center()
        .print()
        .wait()
);

//Completion screen for crowdsourcing participants
/*
newTrial("completion_screen",
    newText("お疲れ様でした。確認コード：" +code)
        .center()
        .print()
        ,
    newText("このコードをコピーし、Lancers画面の入力フォームへペーストすると作業完了です。")
        .center()
        .print()
        .wait()
);
*/
//.log("code",code);
