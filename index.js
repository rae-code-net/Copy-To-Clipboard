let copyText = document.querySelector("#textBox")

function CopyToClipBoard(){
    copyText.select()
    copyText.setSelectionRange(0,100000000000)
    navigator.clipboard.writeText(copyText.value)
    alert("Text Has Been Copied")
}
 
