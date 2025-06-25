const company = {
  marketing: ["Alice", "Bob", "Charlie"],
  sales: ["David", "Eve"],
  engineering: ["Frank", "Grace", "Heidi", "Ivan"]
};

for(const key in company){
    const depertment = company[key]
    console.log(`Department: ${key}`)
    for(const member of depertment){
        console.log(`  - ${member}`)
    }
}