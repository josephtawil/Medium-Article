const title = document.querySelector('.note-title');
const text = document.querySelector('.note-textarea');

$('#btn').on('click',()=>{
    $.ajax({
        method: 'POST',
        url: "/addNotes",
        data: title,
    }).then((response)=>{
        console.log(response);
    })
});
