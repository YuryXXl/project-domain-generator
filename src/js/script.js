window.onload = function () {
  // Attach form submit event listener after the DOM is loaded
  document.getElementById("domainForm").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      // Get user inputs and split into arrays
      const pronouns = document.getElementById("pronoun").value.split(",").map((word) => word.trim());
      const adjectives = document.getElementById("adj").value.split(",").map((word) => word.trim());
      const nouns = document.getElementById("noun").value.split(",").map((word) => word.trim());
      const extensions = document.getElementById("extensions").value.split(",").map((ext) => ext.trim());

      // Clear previous results
      const domainList = document.getElementById("domainList");
      domainList.innerHTML = "";

      // Write the code here
      // Create a new array named 'domains' and push all the domain permutations in it
      const whose = ["mine", "yours", "his", "hers"];
      const pets = ["cat", "dog", "dragon", "chicken"];
      const moves = ["runs", "flies", "swims", "shoots"];
      const mails = ["@gmail", "@yahoo", "@hotmail"];
      const dots = [".com", ".net", ".io"];

      const domains = [];

      // for (const who of whose) {
      //   for (const pet of pets) {
      //     for (const move of moves) {
      //       for (const mail of mails) {  
      //         for (const dot of dots) {
      //         console.log(`${who}${pet}${move}${mail}${dot}`);
      //         domains.push(`${who}${pet}${move}${mail}${dot}`);
      //         }
      //       }
      //     }
      //   }
      // }
      whose.forEach((who) => {
        pets.forEach((pet) => {
          moves.forEach((move) => {
            mails.forEach((mail) => {
              dots.forEach((dot) => {
                domains.push(`${who}${pet}${move}${mail}${dot}`);
                console.log(`${who}${pet}${move}${mail}${dot}`);
              });
            });
          });
        });
      });




      // Display the results
      domains.forEach((domain) => {
        const li = document.createElement("li");
        li.textContent = domain;
        domainList.appendChild(li);
      });
    });
};
