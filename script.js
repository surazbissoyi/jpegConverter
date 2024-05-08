function handle() {
    let fileInput = document.getElementById('file');

    if(fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const fileName = file.name;

        const dot = fileName.lastIndexOf('.');
        const newFileName = fileName.substring(0, dot) + '.jpeg';

        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(file);
        link.download = newFileName;

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
    } else {
        alert('Please select a file before clicking Download.');
    }
}

