document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a')
  links.forEach(link => {
    if (link.href.includes('http') | link.href.includes('mailto:')) {
      link.setAttribute('target', '_blank')
    }
  })
})

function downloadResume() {
  var fileId = "1NmyAmL2zDTJAobymOxh_Jk5xR3PiNyZt"
  var downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
  window.open(downloadLink, '_blank');
}
  