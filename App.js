// Limitations:

// No state retention after reload: The application loses user selection or results after
// the page refresh thus enabling loss of context

// No mechanism for API availability handling: No mechanisms are present in the application 
// to handle the graceful eventuality of API being down or unresponsive, leading to a poor user experience

// Search feature does not enforce pagination: It is impossible to navigate through large 
// collections of search results and go further than the initial load

// Clear search after searching isn't implemented: After a successful search is performed, 
// the field doesn't clear for confused users that expect a fresh search box

// Category filter doesn't work. The search bar won't reset or update according to the 
// results of your search, which may sometimes show mismatches
