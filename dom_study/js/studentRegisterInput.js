function studentRegisterInput({ type, name, onkeyup }) {
	return `
        <div>
            <input type='${type}' name='${name}' onkeyup='${onkeyup}(event)'>
        </div>
    `;
}