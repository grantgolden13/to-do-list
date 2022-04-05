const promptModalEvent = function() {
    const modal = document.querySelector('.modal');
    modal.style.display = "block";
    
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });
};

export default promptModalEvent;