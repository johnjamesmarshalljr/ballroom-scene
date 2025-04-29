
// // Forum Page Component
// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Avatar } from "@/components/ui/avatar";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// /* ----------------------------------
//    HomePage
// ---------------------------------- */
// function HomePage({ setView }) {
//   return (
//     <div className="p-4 pb-20 space-y-6 bg-gray-50 min-h-screen">
//       <div className="fixed top-0 left-0 right-0 bg-white shadow-md flex justify-between items-center px-4 py-3 z-10">
//         <h1 className="text-lg font-bold">Ballroom</h1>
//         <div className="flex gap-4 items-center">
//           <Button variant="ghost" onClick={() => setView("forum")}>Forum</Button>
//           <Button variant="ghost" onClick={() => setView("kikipedia")}>Kikipedia</Button>
//           <Button variant="ghost" onClick={() => setView("music")}>Music</Button>
//           <Button variant="ghost" onClick={() => setView("houses")}>Houses</Button>
//           <Button variant="ghost" onClick={() => setView("ballOrganizer")}>Ball Organizer</Button>
//           <button onClick={() => setView("profile")}>
//             <Avatar className="w-8 h-8 border cursor-pointer" />
//           </button>
//         </div>
//       </div>

//       <div className="pt-20 space-y-6">
//         {/* Next Ball */}
//         <section>
//           <h2 className="text-xl font-semibold mb-2">Next Ball</h2>
//           <Card className="bg-white">
//             <CardContent className="p-4">
//               <p className="text-lg font-bold">Ball Name</p>
//               <p className="text-sm text-gray-600">Date • Location</p>
//               <p className="mt-2 text-sm">Theme, categories, special guests, etc.</p>
//               <Button className="mt-2" size="sm">View Details</Button>
//             </CardContent>
//           </Card>
//         </section>

//         {/* Scene Feed */}
//         <section>
//           <h2 className="text-xl font-semibold mb-2">Scene Feed</h2>
//           <div className="space-y-4">
//             <Card className="bg-white">
//               <CardContent className="p-4">
//                 <p className="font-semibold">Clip from House of X • Vogue Femme</p>
//                 <div className="mt-2 bg-gray-200 h-40 rounded-md"></div>
//               </CardContent>
//             </Card>
//             <Card className="bg-white">
//               <CardContent className="p-4">
//                 <p className="font-semibold">Clip from OTA Runway • House of Y</p>
//                 <div className="mt-2 bg-gray-200 h-40 rounded-md"></div>
//               </CardContent>
//             </Card>
//           </div>
//         </section>

//         {/* Announcements */}
//         <section>
//           <h2 className="text-xl font-semibold mb-2">Announcements</h2>
//           <Card className="bg-white">
//             <CardContent className="p-4 text-sm">
//               Important update from the Alliance regarding upcoming events...
//             </CardContent>
//           </Card>
//         </section>
//       </div>
//     </div>
//   );
// }

// /* ----------------------------------
//    ForumPage
// ---------------------------------- */
// function ForumPage({ onBack }) {
//   const exampleThreads = [
//     {
//       title: "What makes a category legendary?",
//       author: "Icon Dee",
//       content: "Let’s discuss what defines a legendary category and how houses can innovate.",
//       comments: 8
//     },
//     {
//       title: "Where to practice Vogue in ATL?",
//       author: "Rico",
//       content: "Any open practice spaces or sessions this week?",
//       comments: 4
//     },
//     {
//       title: "Favorite beat drops",
//       author: "Mari",
//       content: "Share your favorite ballroom track moments 🔥",
//       comments: 12
//     }
//   ];

//   return (
//     <div className="p-4 bg-gray-50 min-h-screen space-y-6">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-semibold">Forum</h2>
//         <Button variant="ghost" onClick={onBack}>Back to Home</Button>
//       </div>
//       {exampleThreads.map((thread, i) => (
//         <Card key={i} className="bg-white">
//           <CardContent className="p-4 space-y-1">
//             <p className="text-lg font-bold">{thread.title}</p>
//             <p className="text-sm text-gray-600">By {thread.author}</p>
//             <p className="text-sm text-gray-800 mt-2">{thread.content}</p>
//             <p className="text-xs text-gray-500 mt-2">{thread.comments} comments</p>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// }

// /* ----------------------------------
//    KikipediaPage
// ---------------------------------- */
// function KikipediaPage({ onBack }) {
//   const entries = [
//     {
//       title: "House of Iconic",
//       summary: "Founded in 2001, known for groundbreaking Runway moments and East Coast influence."
//     },
//     {
//       title: "Vogue Femme Category",
//       summary: "Dramatic dips, catwalks, and hands performance. Here's how the category evolved."
//     },
//     {
//       title: "Legendary Father Carlos",
//       summary: "A pioneer in realness and community building since the late 90s."
//     }
//   ];

//   return (
//     <div className="p-4 bg-gray-50 min-h-screen space-y-6">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-semibold">Kikipedia</h2>
//         <Button variant="ghost" onClick={onBack}>Back to Home</Button>
//       </div>
//       <Card className="bg-white">
//         <CardContent className="p-4 space-y-2">
//           <p className="font-bold">About Kikipedia</p>
//           <p className="text-sm text-gray-600">
//             A community-built knowledge base about the ballroom scene. Add history, categories, legends, and more.
//           </p>
//           <ul className="text-sm text-gray-700 list-disc list-inside">
//             <li><strong>Houses:</strong> House pages with crest, history, and achievements</li>
//             <li><strong>Categories:</strong> Definitions and past highlights</li>
//             <li><strong>Legends:</strong> Bios and honors</li>
//             <li><strong>Ball History:</strong> Archives and recaps</li>
//           </ul>
//         </CardContent>
//       </Card>
//       {entries.map((entry, i) => (
//         <Card key={i} className="bg-white">
//           <CardContent className="p-4">
//             <p className="font-bold text-lg">{entry.title}</p>
//             <p className="text-sm text-gray-700 mt-1">{entry.summary}</p>
//             <Button className="mt-2" size="sm">Suggest Edit</Button>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// }

// /* ----------------------------------
//    ProfilePage (Placeholder)
// ---------------------------------- */
// function ProfilePage({ onBack }) {
//   return (
//     <div className="p-4 space-y-6">
//       <h2 className="text-xl font-semibold">Profile Page</h2>
//       <p>Here you can manage your profile and settings.</p>
//       <Button onClick={onBack}>Back to Home</Button>
//     </div>
//   );
// }

// /* ----------------------------------
//    MusicPage (Placeholder)
// ---------------------------------- */
// function MusicPage({ onBack }) {
//   return (
//     <div className="p-4 space-y-6">
//       <h2 className="text-xl font-semibold">Music Page</h2>
//       <p>Music content goes here.</p>
//       <Button onClick={onBack}>Back to Home</Button>
//     </div>
//   );
// }

// /* ----------------------------------
//    HousesPage (Placeholder)
// ---------------------------------- */
// function HousesPage({ onBack }) {
//   return (
//     <div className="p-4 space-y-6">
//       <h2 className="text-xl font-semibold">Houses Page</h2>
//       <p>Details about the houses go here.</p>
//       <Button onClick={onBack}>Back to Home</Button>
//     </div>
//   );
// }

// /* ----------------------------------
//    BallOrganizerPage
// ---------------------------------- */
// function BallOrganizerPage({ onBack }) {
//   const [categories, setCategories] = useState([{ type: "performance", title: "", description: "" }]);

//   const handleCategoryChange = (index, field, value) => {
//     const updated = [...categories];
//     updated[index][field] = value;
//     setCategories(updated);
//   };

//   const addCategory = () => {
//     setCategories([...categories, { type: "performance", title: "", description: "" }]);
//   };

//   return (
//     <div className="p-4 bg-gray-50 min-h-screen space-y-6">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-semibold">Ball Organizer</h2>
//         <Button variant="ghost" onClick={onBack}>Back to Home</Button>
//       </div>

//       <div className="bg-white p-4 rounded-md space-y-4">
//         <Input placeholder="Ball Name" />
//         <Input placeholder="Date & Location" />
//         <Textarea placeholder="Theme / Notes" />

//         <div>
//           <p className="font-semibold mb-2">Categories</p>
//           {categories.map((cat, i) => (
//             <div key={i} className="mb-4 space-y-2 border rounded-md p-3">
//               <Select value={cat.type} onValueChange={(val) => handleCategoryChange(i, "type", val)}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select category type" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="performance">Performance</SelectItem>
//                   <SelectItem value="runway">Runway</SelectItem>
//                   <SelectItem value="realness">Realness</SelectItem>
//                   <SelectItem value="fashion">Fashion</SelectItem>
//                 </SelectContent>
//               </Select>
//               <Input
//                 placeholder="Category Title"
//                 value={cat.title}
//                 onChange={(e) => handleCategoryChange(i, "title", e.target.value)}
//               />
//               <Textarea
//                 placeholder="Category Description"
//                 value={cat.description}
//                 onChange={(e) => handleCategoryChange(i, "description", e.target.value)}
//               />
//             </div>
//           ))}
//           <Button size="sm" onClick={addCategory}>Add Another</Button>
//         </div>

//         <Textarea disabled placeholder="LSS Requests will be submitted by houses" />
//         <Textarea disabled placeholder="Music / Productions will be submitted by houses or individuals" />
//         <Input placeholder="Assign Roles (MC, DJ, Judges, Commentators)" />
//         <Button>Create Ball</Button>
//       </div>
//     </div>
//   );
// }

// /* ----------------------------------
//    The Main App
// ---------------------------------- */
// export default function App() {
//   const [view, setView] = useState("home");

//   return view === "home" ? (
//     <HomePage setView={setView} />
//   ) : view === "profile" ? (
//     <ProfilePage onBack={() => setView("home")} />
//   ) : view === "music" ? (
//     <MusicPage onBack={() => setView("home")} />
//   ) : view === "houses" ? (
//     <HousesPage onBack={() => setView("home")} />
//   ) : view === "forum" ? (
//     <ForumPage onBack={() => setView("home")} />
//   ) : view === "kikipedia" ? (
//     <KikipediaPage onBack={() => setView("home")} />
//   ) : view === "ballOrganizer" ? (
//     <BallOrganizerPage onBack={() => setView("home")} />
//   ) : (
//     <div className="p-4">Coming Soon</div>
//   );
// }

// // =============== END CODE ===============

// ---

// ### How This Code Fixes the Ball Organizer Page:

// 1. **Added a `BallOrganizerPage`** with a category manager and an “Add Another” button, plus a “Back to Home” button.
// 2. **Updated the `HomePage`** to include a button that does `setView("ballOrganizer")`.
// 3. **In the `App` component** (the main router), we render `BallOrganizerPage` when `view === "ballOrganizer"`.

// This should restore functionality for the **Ball Organizer** page. You can now copy and paste this entire code into your **“Ballroom App Wireframes”** textdoc or whatever code file you have, replacing its contents. Let me know if you have any further issues!
