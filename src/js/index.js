document.querySelectorAll('.link').forEach(button => {
    button.addEventListener('click', function () {
        const url = this.getAttribute('data-url');
        window.open(url, '_blank');
    });
});