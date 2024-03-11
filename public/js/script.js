(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

// index tax script code
  let taxSwitch = document.getElementById("flexSwitchCheckDefault");
  taxSwitch.addEventListener("click", () => {
    let taxInfo = document.getElementsByClassName("tax-info");
    for (info of taxInfo) {
      if (info.style.display != "inline") {
        info.style.display = "inline";
      } else {
        info.style.display = "none";
      }
    }
  });
  const filterContainer = document.getElementById('filterContainer');
  // Add event listeners to show/hide scrollbar
  filterContainer.addEventListener('mouseenter', () => {
    filterContainer.classList.remove('hide-scrollbar');
  });

  filterContainer.addEventListener('mouseleave', () => {
    filterContainer.classList.add('hide-scrollbar');
  });

  // navbar script code