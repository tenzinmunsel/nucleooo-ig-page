document.addEventListener('DOMContentLoaded', () => {
    const followButton = document.getElementById('followButton');
    if (followButton) {
        followButton.addEventListener('click', () => {
            if (followButton.textContent.trim() === 'Follow') {
                followButton.textContent = 'Following';
                followButton.classList.remove('btn-primary');
                followButton.classList.add('btn-secondary');
            } else {
                followButton.textContent = 'Follow';
                followButton.classList.remove('btn-secondary');
                followButton.classList.add('btn-primary');
            }
        });
    }
});
