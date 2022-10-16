

const inMemory = []
let autoId = 0

function simulateRequest(value) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(value);
        }, 200);
    });
}

export default {
    async save(item) {
        autoId++
        item.id = autoId
        inMemory.push(item)
        return await simulateRequest(item)
    },
    async delete(item) {
        const deletedIndex = inMemory.findIndex(i => i.id === item.id)
        inMemory.splice(deletedIndex, 1)
        return await simulateRequest(deletedIndex)
    },
    async update(item) {
        const updatedIndex = inMemory.findIndex(i => i.id === item.id)
        inMemory[updatedIndex] = item
        return await simulateRequest(updatedIndex)
    },
    async findAll() {
        return await simulateRequest(inMemory)
    }
}