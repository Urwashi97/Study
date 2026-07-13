/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let highestArea = 0
    for (let i = 0; i < height.length - 1; i++) {
        let smallerLine = 0;
        let currentArea = 0
        {
            for (let j = i + 1; j < height.length; j++) {
                console.log(height[i], height[j])
                if (height[i] < height[j])
                    smallerLine = height[i]
                else
                    smallerLine = height[j]
                let index = j - i
                console.log(smallerLine, index, j, i)
                currentArea = smallerLine * index
                if (currentArea > highestArea)
                    highestArea = currentArea
            }
        }
    }
    return highestArea
};