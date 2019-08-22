const proteins = [
{name: "Sérine", codons: ["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"]},
{name: "Proline", codons: ["CCU", "CCC", "CCA", "CCG"]},
{name: "Leucine", codons: ["UUA", "UUG"]},
{name: "Phénylalaline", codons: ["UUU", "UUC"]},
{name: "Arginine", codons: ["CGU", "CGC", "CGA", "CGG", "AGA", "AGG"]},
{name: "Tyrosine", codons: ["UAU", "UAC"]}];


const arn1 = "CCGUCGUUGCGCUACAGC"
const arn2 = "CCUCGCCGGUACUUCUCG"

splittedArn1 = arn1.match(/.{1,3}/g);

let output1 = [];

splittedArn1.forEach(codon => {
    proteins.forEach(prot => {
        if    (prot.codons.includes(codon)) {
            output1.push(prot.name)
        }
    });
});

console.log(output1.join("-"))

splittedArn2 = arn2.match(/.{1,3}/g);

let output2 = [];

splittedArn2.forEach(codon => {
    proteins.forEach(prot => {
        if    (prot.codons.includes(codon)) {
            output2.push(prot.name)
        }
    });
});

console.log(output2.join("-"))
