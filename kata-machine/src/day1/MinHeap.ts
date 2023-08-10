export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }
    delete(): number {
        if (this.length === 0) {
            return -1;
        }

        const out = this.data[0];
        this.length--;

        if (this.length === 0) {
            this.data = [];
            return out;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out;
    }

    private heapifyDown(idx: number): void {
        const leftIdx = this.leftChild(idx);
        const rightIdx = this.rightChild(idx);

        if (idx >= this.length || leftIdx >= this.length) {
            return;
        }

        const leftVal = this.data[leftIdx];
        const rightVal = this.data[rightIdx];
        const value = this.data[idx];

        if (leftVal > rightVal && value > rightVal) {
            this.data[idx] = rightVal;
            this.data[rightIdx] = value;
            this.heapifyDown(rightIdx);
        } else if (rightVal > leftVal && value > leftVal) {
            this.data[idx] = leftVal;
            this.data[leftIdx] = value;
            this.heapifyDown(leftIdx);
        }
    }

    private heapifyUp(idx: number): void {
        if (idx === 0) {
            return;
        }

        const p = this.parent(idx);
        const parentVal = this.data[p];
        const value = this.data[idx];

        if (parentVal > value) {
            this.data[idx] = parentVal;
            this.data[p] = value;
            this.heapifyUp(p);
        }
    }

    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }
    private leftChild(idx: number): number {
        return idx * 2 + 1;
    }
    private rightChild(idx: number): number {
        return idx * 2 + 2;
    }
}
