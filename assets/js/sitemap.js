function genSiteMap() {
    $(document).ready(function() {
        if (location.hostname == "was.bss.design") {
            // console.log("ths is the bss site");
            var siteMapLoc = "https://was.bss.design/sitemap.xml",
                siteDomain = "https://was.bss.design/";
        } else if (location.hostname == "sallen-wiley.github.io") {
            // console.log("ths is the git pages site");
            var siteMapLoc = "https://sallen-wiley.github.io/was/sitemap.xml",
                siteDomain = "https://sallen-wiley.github.io/was/";
        }
        $.get(siteMapLoc, function(d) {
            // alert( "Load was performed." );
            $(d)
                .find("loc")
                .each(function() {
                    var $page = $(this);
                    var sitemapElement = document.getElementById("sitemap");
                    var linkUrl = $page.text(),
                        linkUrl = linkUrl.replace(
                            "https://was.bss.design/",
                            siteDomain
                        ),
                        removeDomain = linkUrl.replace(siteDomain, ""),
                        removeType = removeDomain.replace(".html", ""),
                        primaryNode = removeType.substring(
                            0,
                            removeType.indexOf("/")
                        ),
                        primaryNodeElement = document.getElementById(
                            primaryNode
                        ),
                        linkText = removeType;
                    // create link node
                    var linkDiv = document.createElement("div");
                    var linkElement = document.createElement("a");
                    var linkString = document.createTextNode(linkText);
                    linkElement.href = linkUrl;
                    linkElement.appendChild(linkString);
                    linkDiv.appendChild(linkElement);

                    // check if the primary node has a container and heading
                    // if it exists, append the link to the container else create the container and heading and then add the link
                    if (primaryNodeElement) {
                        // append link
                        primaryNodeElement.appendChild(linkDiv);
                    } else {
                        // create section container
                        var linkSection = document.createElement("div");
                        linkSection.id = primaryNode;
                        linkSection.classList.add("mb-3");
                        sitemapElement.appendChild(linkSection);
                        // creating section heading
                        var headingElement = document.createElement("h3");
                        var headingText = document.createTextNode(primaryNode);
                        headingElement.appendChild(headingText);
                        // append heading
                        linkSection.appendChild(headingElement);
                        // append link
                        linkSection.appendChild(linkDiv);
                    }
                });
        });
    });
}
