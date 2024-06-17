import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MentorService } from "./mentor.service";
import { MentorControllerBase } from "./base/mentor.controller.base";

@swagger.ApiTags("mentors")
@common.Controller("mentors")
export class MentorController extends MentorControllerBase {
  constructor(protected readonly service: MentorService) {
    super(service);
  }
}
