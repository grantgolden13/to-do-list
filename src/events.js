const promptModalEvent = function() {
    const modal = document.querySelector('.modal');
    modal.style.display = "block";

    window.addEventListener('dblclick', (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });
};

export default promptModalEvent;