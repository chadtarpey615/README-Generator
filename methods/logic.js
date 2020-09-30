function markDownStructure(data) {
    return `##   [![Website lbesson.bitbucket.org](https://img.shields.io/website-up-down-green-red/http/lbesson.bitbucket.org.svg)](http://lbesson.bitbucket.org/)  

### Title

${data.title}
    
    
### Table Of Contents

|  content  | 
|  -------  |
|[${data.table[0] ? data.table[0]: ""}](#description)|
|${data.table[1] ? data.table[1]: ""}|
|${data.table[2] ? data.table[2]: ""}|
|${data.table[3] ? data.table[3]: ""}|

     
    
    
### Description {#description}

${data.description}
    
    
### Installation

${data.install}
    
    
 ### Usage

${data.usage}
    
    
 ### License

${data.license}
    
    
 ### Contributions

 ${data.contributing} 
    
     
### Author Info and Contact Information for questions

${data.email}

${data.username}

${data.github}
     `
}



module.exports = markDownStructure;