The request body will have the following: Phone Number and Amount.
The response should contain the payment link.

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
