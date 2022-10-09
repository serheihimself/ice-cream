(() => {
    const refs = {
        openModalBtn: document.querySelector("[general-modal-open]"),
        closeModalBtn: document.querySelector("[general-modal-close]"),
        modal: document.querySelector("[general-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();