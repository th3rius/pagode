#!/usr/bin/env -S npx tsx

import { DateTime } from "luxon";
import getNextFifthBusinessDay from "./getNextFifthBusinessDay";

const today = DateTime.now();
console.log(getNextFifthBusinessDay(today).toLocaleString());
