import { startingMatrix, largeMatrix } from "./data.js";

// use npm start to run the code

class MatrixEdit {
    constructor (matrix){
        this.matrix = matrix;
        this.newMatrix = matrix;
    }

    invertValues () {
        this.newMatrix = this.newMatrix.map(row=>row.map(value =>value === 0 ? 1 : 0))
        return this
    }

    flipAxisX () {
        this.newMatrix = this.newMatrix.map(row => row.toReversed())
        return this
    }

    flipAxisY (){
        this.newMatrix = this.newMatrix.toReversed()
    }

    convertCollumsToRows(){
        const newMatrix = [];
        for (const [index, value] of this.newMatrix[0].entries()) {
            const newRow = []
            for (const row of this.newMatrix) {
                newRow.push(row[index])
            }
            newMatrix.push(newRow)
        }
        this.newMatrix = newMatrix
        return this
    }

    /**
     *  @degrees specify the amount you want to rotate the Matrix in the multiple of 90
     **/
    rotateMatrix (degrees = 90){
        let loopNr;
        degrees === 90 ? loopNr = 1 :
            degrees === 180 ? loopNr = 2:
            degrees === 270 ? loopNr = 3:
            loopNr = 0;
        
        for (let i = 0; i<loopNr; i++){
            this.convertCollumsToRows()
            this.flipAxisX()
        };
        return this
    }
}

const printMatrix = async (matrix, groupName = 'Matrix') =>{
    console.log('----------------------')
    console.group(groupName)
    matrix.forEach(async row => {
        console.log(JSON.stringify(row))
    });
    console.groupEnd()  
}

const getMatrixSize = (matrix) => {
    let ylength = matrix.length
    let xlength = matrix[0].length
    return xlength, ylength
};

let editedMatrix = new MatrixEdit(largeMatrix)
editedMatrix.rotateMatrix(180)

printMatrix(editedMatrix.matrix)
printMatrix(editedMatrix.newMatrix,'Rotated matrix')

