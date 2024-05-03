// write cool JS hwere!!

function toggleSidebar() {
    var sidebar = document.getElementById("mySidebar");
    var main = document.getElementById("mainContent");
  
    if (sidebar.style.width === "250px") {
      sidebar.style.width = "0";
      main.style.marginLeft = "0";
    } else {
      sidebar.style.width = "250px";
      main.style.marginLeft = "250px";
    }
  }