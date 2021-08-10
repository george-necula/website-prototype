import React from "react";
import Sketch from "react-p5";

var screen_width
var screen_height
var cell_width
var cell_count_x
var cell_count_y
var cell_list = []
var cell_new_list = []
var rule
var row_count
class Cell {
	constructor(alive) {
		this.alive = alive
	}
	rule_check(prevoius_cells, index) {
		var situation = prevoius_cells[index - 1].alive * 4 + prevoius_cells[index].alive * 2 + prevoius_cells[index + 1].alive * 1 + 1
		return ('00000000' + rule.toString(2)).slice(-8)[8 - situation]
	}
}



export default function Automata1d(props) {
	//   const something = props
	//   console.log(something)
	const setup = (p5, canvasParentRef) => {
		
		row_count = 0
		
		rule = props.rule

		screen_width = props.size*2
		screen_height = props.size
		cell_width = 1
		cell_count_x = screen_width / cell_width
		cell_count_y = screen_height / cell_width

		for (let i = 0; i < cell_count_x; i++)
			cell_list.push(new Cell(0))

		cell_new_list = [...cell_list]
		cell_list[Math.floor(cell_count_x / 2)].alive = 1

		p5.createCanvas(screen_width, screen_height).parent(canvasParentRef);
		p5.background(220);
		p5.fill(20)

		console.log(rule)

	};

	const draw = (p5) => {
		if(props.rule !== rule){
			console.log('restart');
		}
		
		if (props.play === true) {
			
			for (let i = 1; i < cell_count_x - 1; i++) {
				if (cell_list[i].alive === '1') {
					p5.rect(i * cell_width, row_count * cell_width, cell_width, cell_width, 4, 4, 4, 4)
				}
				cell_new_list[i].alive = cell_list[i].rule_check(cell_list, i)
			}
			// p5.fill(row_count * 3)
			// p5.rect(row_count * 10, row_count * 5, 10, 10)
			// cell_list = [...cell_new_list]
			// cell_list = cell_new_list.slice()

			for (let i = 0; i < cell_count_x; i++)
				cell_list[i] = new Cell(cell_new_list[i].alive)

			for (let i = 0; i < cell_count_x; i++)
				cell_new_list[i].alive = 0

			if (row_count > cell_count_y) {
				p5.noLoop()
				
			}
			

			row_count++
			// console.log(row_count)
		}
	};

	return <Sketch setup={setup} draw={draw} />;
}