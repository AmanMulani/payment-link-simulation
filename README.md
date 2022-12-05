
## Problem Statement
Given phone number and amount, generate a payment link.

To get the payment link, we have to pass the phone number and amount to the API exposed by the bank.
We have three banks, Bank A, Bank B and Bank C.
Link from any of the bank is acceptable, but for every API call made to the bank inocurrs a cost. 

Any of the banks API can be down for undefinded amount of time. 
However all the three banks will not be down at the time for more than 5-10ms.

SLA:
1. Uptime of the system should be 99.999%
2. The response time should be <= 100ms


Build a system such that it dynamically figures out which Bank to make a call to. 
If any of the bank is down, it should try for the next bank.
If all the banks are down, then it should try after some time, and if the response time is exceeds, return an error.


## Approach
We store the last response time for each bank in a global(server memory) data structure. And every time a request succeeds, we update the timestamp. We store the timestamp at which we recieve the request, and try to process it in the window of 100ms from that timestamp. 
And when we have to make a new request, we return the bank with the least amount of response time from the data structure, and then the
request is made to this bank.
We also maintain a data structure to keep track of banks whose APIs are not live. Banks in this data structure are removed if they have been in the list for more than a given threshold amount of time. We update this list on every successful response as well to make sure that live nodes are not reflected in this data structure.
