---
layout: docs
title: Another contact has this contact number. Please enter a different contact number
---

## Another contact has this contact number. Please enter a different contact number. 

This error is most commonly seen when a contact has been merged in Xero whilst there are outstanding documents for that contact, in this instance when Garage Hive tries to interact with the previous entries in Xero it produces an error. 

To see which document is affected by this error, click on the **Source** code to the right of the error, and the customer ledger entries page will open, with the affected document highlighted. 

---

![](media/xero-error-source.png)

---

To rectify this make the entry needed manually in **Xero** and mark the entry as skipped in Garage Hive by selecting **More Options** > **Actions** > **Functions** > **Incoming Document** > **External Accountancy** > **Mark as Skipped**.

Then be sure to block that contact in Garage Hive so it's not used again.
