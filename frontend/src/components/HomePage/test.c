#include<stdio.h>
#include<stdlib.h>

// Function to calculate the total seek time using C-SCAN algorithm
void calculateSeekTime(int request[], int n, int head, int direction) {
    int seek_sequence[n + 1];
    int sorted_request[n];

    // Copy the array to keep the original request array unchanged
    for (int i = 0; i < n; i++)
        sorted_request[i] = request[i];

    // Sort the request array
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (sorted_request[j] > sorted_request[j+1]) {
                // Swap the requests if they are out of order
                int temp = sorted_request[j];
                sorted_request[j] = sorted_request[j+1];
                sorted_request[j+1] = temp;
            }
        }
    }

    int index, total_seek_time = 0;

    for (index = 0; index < n; index++) {
        if (sorted_request[index] > head)
            break;
    }

    int left = index - 1;
    int right = index;
    while (right < n) {
        seek_sequence[right - index] = sorted_request[right];
        total_seek_time += abs(sorted_request[right] - head);
        head = sorted_request[right];
        right++;
    }

    total_seek_time += abs(head - 0);
    head = 0;

    // C-SCAN towards the right again
    right = 0;
    while (right < index) {
        seek_sequence[right + n - index] = sorted_request[right];
        total_seek_time += abs(sorted_request[right] - head);
        head = sorted_request[right];
        right++;
    }

    // Display the seek sequence and total seek time
    printf("Seek Sequence: ");
    for (int i = 0; i <= n; i++)
        printf("%d ", seek_sequence[i]);

    printf("\nTotal Seek Time: %d\n", total_seek_time);
}

int main() {
    int n, head, direction;

    // Input the number of disk requests
    printf("Enter the number of disk requests: ");
    scanf("%d", &n);

    int request[n];

    // Input the disk requests
    printf("Enter the disk requests:\n");
    for (int i = 0; i < n; i++)
        scanf("%d", &request[i]);
    printf("Enter the initial position of the disk head: ");
    scanf("%d", &head);
    printf("Enter the direction (0 for left, 1 for right): ");
    scanf("%d", &direction);

    calculateSeekTime(request, n, head, direction);

    return 0;  }

