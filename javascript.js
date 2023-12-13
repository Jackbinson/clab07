let a = "Leonardo da Vinci"
console.log(a)

let b = "Maneth"
console.log(b)

let c = "Christo"
console.log(c)


gettheuserdata("Ai đã vẽ Bữa ăn tối cuối cùng trong khoảng thời gian ba năm từ 1495 đến 1498?", "Là " ,"."
)
gettheuserdata("Nghệ sĩ nào nổi tiếng với những miêu tả đầy màu sắc về cuộc sống về đêm ở Paris?", "Là ", ".")
gettheuserdata("Nghệ sĩ nào đã bọc tòa nhà Reichstag của Berlin bằng vải để thể hiện nghệ thuật của mình vào năm 1995?", "Là ",".")
function gettheuserdata(question, data, lịchsự) {
    const answer = prompt(question);
    console.log(data + answer + lịchsự);
    alert(data + answer + lịchsự);
    if (answer === a) {
        a = "Leonardo da Vinci"
        alert("Chúc mừng bạn đã đúng");
        console.log(answer)
    }
    else if (answer === b) {
        
        alert("Chúc mừng bạn đã đúng");
        console.log(answer) }
    else if (answer === c) {
        
        alert("Chúc mừng bạn đã đúng");
        console.log(answer)
    }
    else { 
        prompt("Bạn đã sai, vui lòng nhập lại");
    }
  
    
}
