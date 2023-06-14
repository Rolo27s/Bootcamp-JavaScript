/* 
    * equipo[i][0] = (N) El numero de tareas asignadas en el equipo
    * equipo[i][1] = (T) El numero de horas promedio de las tareas en el equipo
    * equipo[i][2] = (R) La duración en horas de la tarea más pequeña en el equipo
*/

// [[N, T, R], ...]
const teams = [[2, 2, 1], [3, 2, 1]];

export function maxTaskDuration (teams) {
    return teams.map(team => {
        const [totalTasks, averageTask, minDuration] = team;

        const totalHours = totalTasks * averageTask;

        const shortestTasksTotal = minDuration * (totalTasks - 1);

        return totalHours - shortestTasksTotal;
    })
}