<script>
document.querySelector('a[href="#howido"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById("howido-modal").style.display = "flex";
  document.getElementById("howido-video").play();
});

document.querySelector(".close-btn").addEventListener("click", function() {
  document.getElementById("howido-modal").style.display = "none";
  document.getElementById("howido-video").pause();
});
</script>
