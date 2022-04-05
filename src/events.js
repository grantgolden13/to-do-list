const promptModalEvent = function() {
    window.addEventListener('click', (e) => {
        const modal = document.querySelector('.modal');
        modal.style.display = "block";
        
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });
};

export default promptModalEvent;