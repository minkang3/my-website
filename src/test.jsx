import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Array of links (data source)
const links = [
  { id: 1, label: "Home", content: "This is the Home Page" },
  { id: 2, label: "About", content: "This is the About Page" },
  { id: 3, label: "Services", content: "These are our Services" },
  { id: 4, label: "Contact", content: "Contact us here" },
];

export default function ExpandableMenu() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="max-w-md mx-auto mt-10">
      {links.map((link) => (
        <div key={link.id} className="overflow-hidden">
          {/* Clickable Link */}
          <motion.div
            className="cursor-pointer p-4 bg-gray-200 mb-2 rounded-lg"
            onClick={() => setExpandedId(expandedId === link.id ? null : link.id)}
            layout
          >
            {link.label}
          </motion.div>

          {/* Expanding Content */}
          <AnimatePresence>
            {expandedId === link.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-100 p-4 rounded-lg"
              >
                {link.content}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
