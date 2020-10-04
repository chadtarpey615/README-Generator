function markDownStructure(data) {
    return `##   ${data.badge}  

###${data.title}
 

-------------------------------------    
    
### Table Of Contents


|[${data.table[0] ? data.table[0]: ""}](#description-description)|
|[${data.table[1] ? data.table[1]: ""}](#usage)|
|[${data.table[2] ? data.table[2]: ""}](#License-License)|
|[${data.table[3] ? data.table[3]: ""}](#author-info-and-contact-information-for-questions)|

---------------------------------------     
    
 


### Description 

${data.description}
    
--------------------------------------



### Installation

${data.install}
    
--------------------------------------    


 ### Usage

${data.usage}
    
--------------------------------------



 ### License

${data.license}
    
    
--------------------------------------



 ### Contributions

 ${data.contributing} 
    
 --------------------------------------


### Author Info and Contact Information for questions

Email: ${data.email}

Name: ${data.username}

GitHub: ${data.github}
     `
}



module.exports = markDownStructure;