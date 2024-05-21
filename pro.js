<script>
const navBar = document.querySelector('.navbar');
const toggleBtn = document.querySelector('.toggle');
toggleBtn.onclick = function() {
    toggleBtn.classList.toggle('active');
    navBar.classList.toggle('active');
}
document.querySelector('.nav-list').onclick = function() {
    toggleBtn.classList.toggle('active');
    navBar.classList.toggle('active');
}
</script>