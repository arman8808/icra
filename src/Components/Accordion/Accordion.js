import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import Button from "@mui/material/Button";
import { IoIosArrowDown } from "react-icons/io";

export default function AccordionUsage({ title, detail }) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {title ? title : "Accordion"}
        </AccordionSummary>
        <AccordionDetails>
          {detail
            ? detail
            : "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse  malesuada lacus ex, sit amet blandit leo lobortis eget."}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
