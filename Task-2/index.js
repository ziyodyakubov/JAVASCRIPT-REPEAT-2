const fileInput = document.getElementById('file-input');
let result = document.querySelector("#result")

fileInput.addEventListener('change', ()=> {
    const files = fileInput.files;

    if (files.length > 0) {
        const fileSizeInBytes = files[0].size;

        const fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
        
        result.innerHTML = fileSizeInMegabytes.toFixed(2)+ ' MB'
    }
});