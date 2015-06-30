var pi;
var seqChar;
var count=0;


function checkSubSeq(seqChar,mainBlock,st2){
	if(mainBlock.indexOf(seqChar.charAt(st2))!=-1){
		//var newString=mainBlock.substring(mainBlock.indexOf(seqChar.charAt(st2+1)));
		if(st2<(seqChar.length-1)){
			var newString=mainBlock.substring(mainBlock.indexOf(seqChar.charAt(st2)));
			checkSubSeq(seqChar,newString,(st2+1))
		}else if(st2==(seqChar.length-1)){
			if(mainBlock.substring(mainBlock.indexOf(seqChar.charAt(st2)))!=-1){
				return count++;
			}
		}
	}
}