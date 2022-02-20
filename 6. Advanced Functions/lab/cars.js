function cars(arr) {
    const car = {};
    const commands = {
        create: (x, inherit, y) => car[x] = inherit != undefined ? Object.create(car[y]) : {},
        set: (name, k, v) => car[name][k] = v,
        print: name => {
            const output = [];
            for (let key in car[name]) {
                output.push(`${key}:${car[name][key]}`);
            }
            console.log(output.join(','));
        }
    };
    arr.map(x => x.split(' '))
        .forEach(([cmd, ...others]) => commands[cmd](...others));
}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
])