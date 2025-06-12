#include <stdio.h>

int binary_search(int arr[], int x, int low, int high) {
    while (low <= high) {
        int mid = (low + high) / 2; // Calculate mid index

        if (x == arr[mid]) { // Check if element is found
            return mid;
        } else if (x > arr[mid]) { // Search in the right half
            low = mid + 1;
        } else { // Search in the left half
            high = mid - 1;
        }
    }
    return -1; // Element not found
}

int main() {
    int arr[] = {10, 20, 30, 40, 50, 100}; // Array to search
    int key = 100; // Element to search for
    int size = sizeof(arr) / sizeof(arr[0]); // Size of the array

    int res = binary_search(arr, key, 0, size - 1);

    if (res == -1) { // If element is not found
        printf("Element not found\n");
    } else { // If element is found
        printf("Element found at index: %d\n", res);
    }

    return 0;
}