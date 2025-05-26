import cron from "node-cron";
import { distributeDailyROI } from "./distributeDailyROI.js";
import { distributeLevelIncome } from "./levelIncome.js";

// At 00:00 (midnight) every day
cron.schedule("0 0 * * *", async () => {
  try {
    await distributeDailyROI();
  } catch (err) {
    console.error("❌ Error in distributeDailyROI:", err);
  }
});

cron.schedule("0 0 * * *", async () => {
  try {
    await distributeLevelIncome();
    // console.log("✅ distributeLevelIncome ran at 12:00 AM");
  } catch (err) {
    console.error("❌ Error in distributeLevelIncome:", err);
  }
});
