function markDownStructure(data) {
    return `
###  ${data.title}

## ![${data.license} license](https://img.shields.io/badge/License-${data.license}-blue.svg)
 

-------------------------------------    
    
### Table Of Contents


- [${data.table[0] ? data.table[0]: ""}](#description)

- [${data.table[1] ? data.table[1]: ""}](#usage)

- [${data.table[2] ? data.table[2]: ""}](#License)

- [${data.table[3] ? data.table[3]: ""}](#Author-Info-and-Contact-Information-for-questions)



---------------------------------------     
    
 


### Description ‹

- ${data.description}
    
--------------------------------------



### Installation

- ${data.install}
    
--------------------------------------    


 ### Usage

- ${data.usage}
    
--------------------------------------



 ### License

- ${data.license}
    
    
--------------------------------------



 ### Contributions

 - ${data.contributing} 
    
 --------------------------------------


### Author Info and Contact Information for questions

* Email: ${data.email}

* Name: ${data.username}

* GitHub: [github.com/${data.username}]

[back to top](#Table-Of-Contents)
     `
}





module.exports = markDownStructure;