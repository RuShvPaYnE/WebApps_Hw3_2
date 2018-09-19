
/**
 * Created by Hans Dulimarta
 * TODO: Add your name below this line
 */

/**
 * Given the ID of a node {rootId}, find all its descendant elements having
 * its attribute id set and then change their class to {klazName}.
 * The function returns the number of such elements found.
 *
 * @param rootId    the ID of the "root" element to begin searching
 * @param klazName  the class to assign to each descendant whose id attrib 
 *                  is set.
 * @returns {number}
 */
function findElementsWithId(rootId, klazName) {
  /* complete this function */
    let idContainer = document.getElementById(rootId);
    let children = idContainer.querySelectorAll("[id]");
    for (let i =0;  i< children.length; i++){
        children[i].setAttribute("class",klazName);
    }
    console.log(children);
    return children.length;
}

/**
 * The following function finds all elements with attribute 'data-gv-row' (or
 * 'data-gv-column') and create a table of the desired dimension as a child of
 * the element.
 *
 * @returns NONE
 */
function createTable() {
    /* complete this function */
    let divClass = document.getElementsByClassName("table-home")[0];
    console.log(divClass);
    let row= divClass.getAttribute("data-gv-row");
    let column=divClass.getAttribute("data-gv-column");

    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '1');
    const lips = new LoremIpsum();
    let d = 0;
    
    for (var i = -1; i < row; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < column; j++) {
            if (i == row && j == column) {
                break
            } else {

                if(d != (column))
                {
                    let th = document.createElement('th')
                    let txt = "heading "+ (d+1);
                    th.innerText=txt;
                    tr.appendChild(th);
                    d = d+1; 
                }else{
                var td = document.createElement('td');
                td.appendChild(document.createTextNode('\u0020'))
                tr.appendChild(td);
                let text = lips.generate(10);
                td.innerText =text;    
                }
                
                
            }
        }
        tbl.appendChild(tr);        
    }   
    divClass.appendChild(tbl);

}