# MadTour

/project folder contains the code

The rest of the space should be used for documentation files and the like

Use /project/assets/images/colorscheme=06.png for colors


Page Descriptions
    App
        Maintains the navigation of each of the pages and is run on start

    HomePage
        root page
        Displays he starting screen

    QuizPage
        Displays a questionnaire for the user to select different event filters
        Information from the questions should be stored for used elsewhere

    EventPage
        Displays a specific event in more detail than can be shown on the list
        Event information should be passed in or retrieved to display the correct event

    SelectEventPage
        Displays a list of events based on the filters from the QuizPage

    PlanPage
        Displays a specific schedule that was selected from SelectPlan

    SelectPlanPage
        Displays a list of schedules with the events that were selected from SelectEventPage

    SavedPlansPage
        Displays a list of saved plans with names and the like based on what the user selected