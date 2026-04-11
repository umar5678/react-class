# React Fundamentals Course Repository

## 📁 Folder Structure

### In-Class (`/src/in-class/`)
Each day's lesson is in a separate folder:
- `Day[X].jsx` - Main component for navigation
- `README.md` - Lesson notes and theory
- `examples/` - Live code examples demonstrated in class

### Assignments (`/src/assignments/`)
Each assignment has:
- `Assignment.jsx` - Assignment page component
- `README.md` - Detailed instructions
- `starter/` - Where students write their code
- `solution/` - Instructor solution (hidden from students)

## 🎯 For Students

### Viewing Lessons
1. Run `npm run dev`
2. Navigate to `http://localhost:5173`
3. Click on any day to view lesson content

### Completing Assignments
1. Find assignment in the assignments folder
2. Work in the `starter/` subfolder
3. Reference lesson content from in-class folder
4. Commit your changes to your own repo

## 👨‍🏫 For Instructor

### Adding a New Day
1. Create folder: `src/in-class/day-X-topic-name/`
2. Add `DayX.jsx` component
3. Create `README.md` with lesson notes
4. Add route in `App.jsx`
5. Update `Home.jsx` lessons array

### Adding a New Assignment
1. Create folder: `src/assignments/day-X/`
2. Add `Assignment.jsx` component
3. Create `README.md` with instructions
4. Add starter code in `starter/` folder
5. Add solution in `solution/` folder
6. Add route in `App.jsx`
7. Update `Home.jsx` assignments array

## 🚀 Quick Start
```bash
npm install
npm run dev