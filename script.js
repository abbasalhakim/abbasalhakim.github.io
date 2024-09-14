var researchJSON;
function dropdown(x) {
    x.classList.toggle("change");
    document.getElementsByClassName("drop-down")[0].classList.toggle("shown");
}
function toggleCard(x, desc) {
    x.classList.toggle("hover-card2");

    var mapper = {"block":"none", "none": "block"}
    desc.style.setProperty("display", mapper[desc.style.display]);
}

function researchFetch() {
    fetch("./const.json")
        .then(response => response.json())
        .then(json => {
            researchJSON = json;
            researchJSON.research.forEach((r) => {
                var node = document.createElement("div")
                node.className = `research-card hover-card ${r.description.length > 0 ? "hover-card hover-card2":""}`;
                var titleElm = document.createElement("p")
                titleElm.className = "research-title-elm";
                titleElm.innerHTML = "<strong>" + r.title + "</strong>";
                var subnode = document.createElement("div")
                subnode.className = "research-subnode";
                var authorElm = document.createElement("p")
                authorElm.className = "research-author-elm";
                authorElm.innerText = r.authors;
                var journalElm = document.createElement("p")
                journalElm.className = "research-journal-elm";
                journalElm.innerHTML = r.journal;
                var yearElm = document.createElement("p")
                yearElm.className = "research-journal-elm";
                yearElm.innerText = "(" + r.year + ")";
                var descriptionElm = document.createElement("p")
                descriptionElm.className = "research-description-elm";
                descriptionElm.innerHTML = r.description;
                descriptionElm.style.setProperty("display", "none");
                var tempElm1 = document.createElement("p")
                tempElm1.className = "research-description-elm tempElm";
                tempElm1.innerHTML = '.<span class="tab"></span>'
                var tempElm2 = document.createElement("p")
                tempElm2.className = "research-description-elm tempElm";
                tempElm2.innerHTML = '.<span class="tab"></span>'
                subnode.appendChild(authorElm);
                subnode.appendChild(tempElm1);
                subnode.appendChild(journalElm);
                subnode.appendChild(tempElm2);
                subnode.appendChild(yearElm);

                node.appendChild(titleElm);
                node.appendChild(subnode);
                node.appendChild(descriptionElm);
                if (r.description.length > 0)
                    node.onclick = () => toggleCard(node, descriptionElm);
                document.getElementById("research-container").appendChild(node);
            })
        })
        .catch(error => console.log("Error Fetching Data!" + error))
}
function teachingFetch() {
    fetch("./const.json")
        .then(response => response.json())
        .then(json => {
            teachingJSON = json;
            teachingJSON.teaching.forEach((r) => {
                var node = document.createElement("div")
                node.className = `research-card teaching hover-card ${r.description.length > 0 ? "hover-card hover-card2":""}`;
                var titleElm = document.createElement("p")
                titleElm.className = "research-title-elm";
                titleElm.innerHTML = "<strong>" + r.title + "</strong>";
                var subnode = document.createElement("div")
                subnode.className = "research-subnode";
                var orgElm = document.createElement("p")
                orgElm.className = "research-author-elm";
                orgElm.innerText = r.institution;
                var cnoElm = document.createElement("p")
                cnoElm.className = "research-journal-elm";
                cnoElm.innerHTML = r.CNO;
                var freqElm = document.createElement("p")
                freqElm.className = "research-journal-elm";
                freqElm.innerText = "(" + "freq.  " + r.frequency + ")";
                var descriptionElm = document.createElement("p")
                descriptionElm.className = "research-description-elm";
                descriptionElm.innerHTML = r.description;
                descriptionElm.style.setProperty("display", "none");
                var tempElm1 = document.createElement("p")
                tempElm1.className = "research-description-elm tempElm";
                tempElm1.innerHTML = '-'
                var tempElm2 = document.createElement("p")
                tempElm2.className = "research-description-elm tempElm";
                tempElm2.innerHTML = '.<span class="tab"></span>'
                subnode.appendChild(cnoElm);
                subnode.appendChild(tempElm1);
                subnode.appendChild(orgElm);
                subnode.appendChild(tempElm2);
                subnode.appendChild(freqElm);

                node.appendChild(titleElm);
                node.appendChild(subnode);
                node.appendChild(descriptionElm);

                if (r.description.length > 0)
                    node.onclick = () => toggleCard(node, descriptionElm);
                document.getElementById("teaching-container").appendChild(node);
            })
        })
        .catch(error => console.log("Error Fetching Data!" + error))
}

document.addEventListener("DOMContentLoaded", function() {
    fetch('const.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('intro-text').innerHTML = data.hero.introText;

            const backgroundContainer = document.getElementById('background-sections');
            data.background.forEach(section => {
                const sectionDiv = document.createElement('div');
                sectionDiv.style.marginBottom = '3rem';
                sectionDiv.innerHTML = `
                    <i class="${section.icon}" style="font-size: 2rem; display: block; margin-bottom: 1rem;"></i>
                    <p>${section.text}</p>
                `;
                backgroundContainer.appendChild(sectionDiv);
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
});
