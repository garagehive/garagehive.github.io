---
layout: docs
title: Account could not be found.
---

#   Account could not be found. 

This error is most commonly seen when a contact has been merged in Xero whilst there are outstanding documents for that contact, in this instance when Garage Hive tries to interact with the previous entries in Xero it produces an error. 

To see what document this error relates to clicking on the “Source” code to the right of the error and the customer ledger entries page will load with the effected document highlighted. 

---
![](media/xero-error-source.png)

---

To rectify this make the entry needed manually in Xero and mark the entry as skipped in Garage HIve by selecting more options > functions > incoming document > external accountancy > mark as skipped.
Then be sure to block that contact in Garage Hive so it's not used again.
